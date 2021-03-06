// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = ( api ) => {
    api.cache( true );
    return {
        plugins: [
            ['module-resolver', {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx'
                ],
                root: ['./src'],
            }],
        ],
    };
};
