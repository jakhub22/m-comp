export const customFunctions = {
    getBodyHeight: {
        importName: 'getBodyHeight',
        example: `const height = getBodyHeight(0); \n<div>{height + px}</div>`,
        description: 'navbar-аас доошх одоогийн өндөрийг буцаана',
        required: 'үндсэн өндөрөөс хасах утга байхгүй бол 0 гэж өгнө',
    },
    emailValidation: {
        importName: 'emailValidation',
        example: `function checkEmail(email = "test@gmail.com"){\n\tif(emailValidation(email)) continue;\n\telse break;\n}`,
        description:
            'email хаягыг зөв оруулсан эсэхийг шалгаж boolean утга буцаана',
        required: 'value заавал явуулна',
    },
};
