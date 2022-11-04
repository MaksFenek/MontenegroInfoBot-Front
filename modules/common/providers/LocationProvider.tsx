import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface LocationProviderProps {
  children: React.ReactNode;
}

const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  if (!Telegram?.WebApp.initData.length) {
    return <>{children}</>;
  } else {
    return <LocationProviderInner>{children}</LocationProviderInner>;
  }
};

const LocationProviderInner: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const { push } = useRouter();
  const mount = React.useRef(true);

  const redirectToLastPage = () => {
    const currentLocation = Cookies.get("location_app");
    if (!currentLocation) return;
    push(currentLocation);
  };

  React.useEffect(() => {
    // TODO: Fix for next.js
    // if (mount.current) {
    //   if (location.key === "default") redirectToLastPage();
    // }
    mount.current = false;

    Cookies.set("location_app", location.pathname, {
      expires: new Date(new Date().getTime() + 10 * 60 * 1000), // 10 min
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return <>{children}</>;
};

export default LocationProvider;
