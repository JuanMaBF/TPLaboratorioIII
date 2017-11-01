/// <reference path="../jquery/jquery.d.ts" />

import * as $ from "jquery";

export class Startup {
    public static main(): number {
        console.log('Hello World');
        $(".btn-salir").first();
        return 0;
    }
}

Startup.main();