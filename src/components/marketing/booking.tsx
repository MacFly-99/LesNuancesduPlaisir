"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Booking({ calLink }: { calLink: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: calLink });
      
      // Configuration de l'interface
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light",
      });

      // On écoute l'événement de succès pour notre notification
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          // On déclenche un événement personnalisé que la page écoutera
          window.dispatchEvent(new CustomEvent("bookingSuccessful"));
        },
      });
    })();
  }, [calLink]);

  return (
    <Cal
      namespace={calLink}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "auto" }}
      config={{ layout: "month_view" }}
    />
  );
}