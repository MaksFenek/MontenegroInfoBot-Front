import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface LocationProviderProps {
  children: React.ReactNode;
}

const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  if (!Telegram.WebApp.initData.length) {
    return <>{children}</>;
  } else {
    return <LocationProviderInner>{children}</LocationProviderInner>;
  }
};

const LocationProviderInner: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const mount = React.useRef(true);

  const redirectToLastPage = () => {
    const currentLocation = Cookies.get("location_app");
    if (!currentLocation) return;
    navigate(currentLocation);
  };

  React.useEffect(() => {
    if (mount.current) {
      if (location.key === "default") redirectToLastPage();
    }
    mount.current = false;

    Cookies.set("location_app", location.pathname, {
      expires: new Date(new Date().getTime() + 10 * 60 * 1000), // 10 min
    });
  }, [location.key, location.pathname]);

  return <>{children}</>;
};

export default LocationProvider;
