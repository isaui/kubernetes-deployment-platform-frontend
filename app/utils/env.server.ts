/**
 * Server-side environment variables
 */
export function getEnv() {
  return {
    API_BASE_URL: process.env.API_BASE_URL || "https://kubernetes-deployment-platform-main.52bda5.app.isacitra.com",
    LOAD_BALANCER_IP: process.env.LOAD_BALANCER_IP || "168.231.121.243",
    NODE_ENV: process.env.NODE_ENV || "production",
  };
}
