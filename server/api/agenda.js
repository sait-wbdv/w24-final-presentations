export default defineEventHandler(async (event) => {
  const data = await useStorage("assets:server").getItem(`data.json`);

  return data;
});
