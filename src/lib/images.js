const BASE = "https://media.base44.com/images/public/6ac1b432598089bbd885aefa";
const U = "https://images.unsplash.com";

// Real photography (Unsplash) for the fire scenes the camera could actually see.
export const fire = `${U}/photo-1619461129861-d0c1479c48b4?auto=format&fit=crop&w=2400&q=80`;
export const ridge = `${U}/photo-1615092296061-e2ccfeb2f3d6?auto=format&fit=crop&w=2400&q=80`;
export const trees = `${U}/photo-1511027643875-5cbb0439c8f1?auto=format&fit=crop&w=2400&q=80`;
export const responder = `${U}/photo-1507680465142-ef2223e23308?auto=format&fit=crop&w=2400&q=80`;

// Photorealistic generated imagery for hardware and technical views.
export const node = `${BASE}/f904dd4fc_generated_image.png`;
export const copter = `${BASE}/c9e43d295_generated_image.png`;
export const thermal = `${BASE}/96acb8b52_generated_image.png`;
export const aftermath = `${BASE}/704819be2_generated_image.png`;
export const ops = `${BASE}/31c7c86a0_generated_image.png`;
export const team = `${BASE}/aa4dbba3b_generated_image.png`;

// Legacy aliases (kept so every page keeps resolving).
export const earth = ridge;
export const storm = ridge;
export const workshop = team;

export const IMG = {
  fire, ridge, trees, responder, node, copter, thermal, aftermath, ops, team,
  earth, storm, workshop,
};