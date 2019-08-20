module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:vue/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
				"vue/html-indent": [
					"error",
					"tab",
					{
						"alignAttributesVertically": true
					}
				],
				"vue/singleline-html-element-content-newline": ["error", {
			    "ignoreWhenNoAttributes": true,
			    "ignoreWhenEmpty": true,
			    "ignores": ["pre", "textarea", "span","a"]
			  }],
				"vue/max-attributes-per-line": ["error", {
			    "singleline": 5,
			    "multiline": {
			      "max": 1,
			      "allowFirstLine": true
			    }
			  }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-mixed-spaces-and-tabs": 0,
        "no-undef": 0,
        "no-empty": 0,
				"no-tabs": 0,
				"no-console": 0
    }
};
