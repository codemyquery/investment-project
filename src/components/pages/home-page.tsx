import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers"
import { useEffect } from "react";
import { ServiceStatus } from "../../types";
import { RightsMenuService } from "../../services";
import { TemplateHome } from "../templates";

export const HomePage = () => {
  const { homeURL } = useAuth();
  const service = RightsMenuService.useMainRouting();
  let navigate = useNavigate();

  useEffect(() => {
    async function init() {
      if (service.result.status === ServiceStatus.Loaded) {
        navigate(homeURL);
      }
    }
    init();
    return () => { console.log("unmount homepage") }

  }, [service.result.status]);

  return <TemplateHome routingService={service.result} />;
}