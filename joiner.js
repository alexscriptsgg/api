export default async function handler(req, res) {
  const { placeId, gameInstanceId } = req.query;

  if (!placeId || !gameInstanceId) {
    return res.status(400).send("Missing placeId or gameInstanceId");
  }

  // Redirects to the Roblox app to join that specific server
  const robloxLink = `roblox://placeId=${placeId}&gameInstanceId=${gameInstanceId}`;
  res.writeHead(302, { Location: robloxLink });
  res.end();
}

