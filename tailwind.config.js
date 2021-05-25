module.exports = {
	purge: [],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'sans': 'Open Sans, Helvetica, Arial, sans-serif',
				'title': 'Vollkorn, Open Sans, Helvetica, Arial, sans-serif',
			},
			colors: {
				"rad-bg": '#fef0df',
				"hljs": '#2f3337',
				"hljs-dark": '#ffffff',
				"hljs-comment": '#656e77',
				"hljs-comment-dark": '#999999',
				"hljs-comment": '#656e77',
				"hljs-comment-dark": '#999999',
				"hljs-attr": '#015692',
				"hljs-attr-dark": '#88aece',
				"hljs-attribute": '#803378',
				"hljs-attribute-dark": '#c59bc1',
				"hljs-literal": '#b75501',
				"hljs-literal-dark": '#f08d49',
				"hljs-meta-string": '#54790d',
				"hljs-meta-string-dark": '#b5bd68',
				"hljs-code": '#535a60',
				"hljs-code-dark": '#cccccc',
				"hljs-deletion": '#c02d2e',
				"hljs-deletion-dark": '#de7176',
				"hljs-addition": '#2f6f44',
				"hljs-addition-dark": '#76c490',
			},
		},
	},
		variants: {
			extend: {
			divideColor: ['responsive', 'dark'],
			padding: ['responsive', 'dark']
			}
		},
		plugins: [
			require('tailwindcss'),
			require('autoprefixer'),
		],
}
