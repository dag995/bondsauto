
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/contact" | "/faq" | "/services" | "/services/diagnosis" | "/services/mot" | "/services/repairs" | "/services/servicing";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/contact": Record<string, never>;
			"/faq": Record<string, never>;
			"/services": Record<string, never>;
			"/services/diagnosis": Record<string, never>;
			"/services/mot": Record<string, never>;
			"/services/repairs": Record<string, never>;
			"/services/servicing": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/contact" | "/faq" | "/services" | "/services/diagnosis" | "/services/mot" | "/services/repairs" | "/services/servicing";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/bonds_auto_logo.svg" | "/bondsauto_logo_white.svg" | "/favicon.ico" | "/favicon.png" | "/images/.DS_Store" | "/images/about_01.jpg" | "/images/home_01.jpg" | "/images/home_02.jpg" | "/images/home_03.jpg" | "/robots.txt" | "/styles.css" | string & {};
	}
}