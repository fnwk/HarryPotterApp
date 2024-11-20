import { Image, ImageProps } from "react-native";
import SkeletonContainer from "@/components/SkeletonContainer";
import { useState } from "react";

const AppImage = (props: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <SkeletonContainer>
          <Image {...props} style={{ backgroundColor: "white" }} />
        </SkeletonContainer>
      )}
      <Image
        onLoadEnd={() => setIsLoaded(true)}
        style={isLoaded ? props.style : { height: 1 }}
        {...props}
      />
    </>
  );
};

export default AppImage;
