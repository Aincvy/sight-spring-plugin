print("load sight-spring-plugin nodes.");

addTemplateNode({
    __meta_name: "HttpRequest",
    __meta_address: "spring/http",
    __meta_func: {
        generateCodeWork($, $$) {
            return "";
        },
    },
    __meta_outputs: {
        args: {
            type: 'Object',
            typeList: true       // 
        }

    },
});