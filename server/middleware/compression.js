import { defineEventHandler } from 'h3';
import compression from 'compression';

export default defineEventHandler((event) => {
  compression()(event.node.res, event.node.req, () => {});
});