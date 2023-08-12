export const notifyOnDiscord = async (webhook: string, message: string) => {
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
