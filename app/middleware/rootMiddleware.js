import { applyMiddleware } from 'redux'
import createLogger from 'redux-logger';

const logger = createLogger();

export default applyMiddleware(
  logger,
  // SessionMiddleware,
  // EventMiddleware,
  // TypeMiddleware,
  // CategoryMiddleware,
  // BookmarkMiddleware,
  // TicketMiddleware
);
