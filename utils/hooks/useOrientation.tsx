import { useEffect } from "react";
import {
  lockAsync,
  OrientationLock,
  unlockAsync,
} from "expo-screen-orientation";
import { useIsFocused } from "@react-navigation/core";
import useThemeStore from "@/stores/theme.store";

const useOrientation = (orientation: OrientationLock) => {
  const isFocused = useIsFocused();
  const setHideUI = useThemeStore((state) => state.setHideUI);

  useEffect(() => {
    if (isFocused) {
      lockAsync(orientation);

      if (orientation === OrientationLock.LANDSCAPE_LEFT) {
        setHideUI(true);
      }
    } else {
      setHideUI(false);
      unlockAsync();
    }
  }, [isFocused, orientation]);
};

export default useOrientation;
