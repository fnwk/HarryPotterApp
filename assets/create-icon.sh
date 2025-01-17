#!/bin/bash
cd "$(dirname "$0")"


IFS=$'\n'
paths=($(find . -name "*.svg"))
unset IFS

echo "" > Icon.tsx

echo "import React from 'react';" >> Icon.tsx
echo "import {SvgProps} from 'react-native-svg';" >> Icon.tsx
echo "import useColor from '@/utils/hooks/useColor';" >> Icon.tsx



for i in "${paths[@]}"
do
   file_name=$(basename "$i" .svg)  # Extract only the file name without the path and ".svg" extension
   file_name_lowercase=$(echo "$file_name" | sed -r 's/(^|-)(\w)/\U\2/g; s/-//g')  # Convert to lowercase and remove hyphens
   echo "import $file_name_lowercase from  '$i'" >> Icon.tsx
done

echo "" >> Icon.tsx
echo "const ICONS = {" >> Icon.tsx

for i in "${paths[@]}"
do
   file_name=$(basename "$i" .svg)  # Extract only the file name without the path and ".svg" extension
   file_name_lowercase=$(echo "$file_name" | sed -r 's/(^|-)(\w)/\U\2/g; s/-//g')  # Convert to lowercase and remove hyphens
   echo "$file_name_lowercase," >> Icon.tsx
done

echo "}" >> Icon.tsx

echo "
export type IconType = keyof typeof ICONS;

" >> Icon.tsx

echo "
interface IconProps extends SvgProps {
    name: IconType;
    noStroke?: boolean;
    fillDefault?: boolean;
    className?: string;
}
" >> Icon.tsx



echo "
const AppIcon = ({
  name,
  noStroke,
  fillDefault,
  ...props
}: IconProps) => {
  const CurrentIcon = ICONS[name];
  const color = useColor('beta');

  return (
    <CurrentIcon
      {...props}
      stroke={noStroke ? 'none' : color}
      fill={fillDefault ? color : 'none'}
    />
  );
};

export const Icon = React.memo(AppIcon);
" >> Icon.tsx
