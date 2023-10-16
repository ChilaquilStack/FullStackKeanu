import { useDispatch } from 'react-redux';
import { getImage } from '../../features/image/imageSlice';
import { GET_IMAGE_QUERY } from '../../querys/image.query';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type FormProps = {
    width: string,
    height: string,
    grayscale: boolean,
    young: boolean
}

export const Form = () => {

    const dispatch = useDispatch()

    const {
        handleChange,
        handleSubmit,
        touched,
        errors,
        values: {
            width,
            height,
            grayscale,
            young
    }} = useFormik<FormProps>({
        initialValues: {
            width: "",
            height: "",
            young: false,
            grayscale: false
        },
        validationSchema: Yup.object({
            width: Yup.number().required('Please enter a number').typeError('Please enter a valid number'),
            height: Yup.number().required('Please enter a number').typeError('Please enter a valid number'),
            grayscale: Yup.bool(),
            young: Yup.bool()
        }),
        onSubmit: ({ width, height, grayscale, young }) => {
            dispatch(getImage({
                query: GET_IMAGE_QUERY,
                variables : {
                    width,
                    height,
                    options: {
                        gray: grayscale,
                        young
                    }
                }
            }))
        }
    })

    return(
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg m-5">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="width" className='block text-gray-600'>width</label>
                    <input type="text" name="width" onChange={handleChange} value={width} className='class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400'/>
                    {touched.width && errors.width && <div className='text-red-500'>{errors.width}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="height" className='block text-gray-600'>height</label>
                    <input type="text" name="height" onChange={handleChange} value={height} className='class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400'/>                
                    {touched.height && errors.height && <div className='text-red-500'>{errors.height}</div>}
                </div>

                <div className="mb-4">
                    <label htmlFor="young" className='block text-gray-600'>Young</label>
                    <input type="checkbox" name="young" onChange={handleChange} checked={young} value="young" className="form-checkbox h-5 w-5 text-blue-500"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="grayscale" className='block text-gray-600'>Grayscale</label>
                    <input type="checkbox" name="grayscale" onChange={handleChange} checked={grayscale} value="grayscale" className="form-checkbox h-5 w-5 text-blue-500"/>
                </div>

                <input type="submit" value="Generate" className='bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600'/>
            </form>
        </div>
    )
}