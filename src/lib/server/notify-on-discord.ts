import { dev } from "$app/environment";
export const notifyOnDiscord = async (webhook: string, message: string) => {
  if (dev) return;
  await fetch(webhook, {
    body: JSON.stringify({
      content: message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  }).catch(console.error);
};
