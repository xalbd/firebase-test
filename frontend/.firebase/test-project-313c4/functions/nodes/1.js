

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.370cf8ff.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.73694274.js","_app/immutable/chunks/singletons.16cc5a85.js"];
export const stylesheets = [];
export const fonts = [];
