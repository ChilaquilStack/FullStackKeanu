export const GET_IMAGE_QUERY = `
    query Image($width: String, $height: String, $options: Options) {
        image(width: $width, height: $height, options: $options)
    }
`