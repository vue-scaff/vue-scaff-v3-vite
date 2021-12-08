// Import Main
import Main from '@/scaff';

// Import Scaff
import Scaff from '@scaff/vite';

/**
 * Issue: https://github.com/vitejs/vite/issues/3033
 * ========= ========== ==========
 */
try {
  // Create App use Scaff
  new Scaff(Main);
}
catch (e) {}
