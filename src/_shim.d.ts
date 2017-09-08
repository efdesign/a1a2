// _shim.d.ts
import * as __angular from "angular";
// silence the error 
declare global {
    const angular: typeof __angular;
}

