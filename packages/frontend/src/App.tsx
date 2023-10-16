import { Form, Loader, Alert } from "./components";
import { useSelector } from "react-redux";

export default function App () { 
  
  const { image } = useSelector((state: any) => state.image.image);

  const {loading: isLoading} = useSelector((state: any) => state.image);

  const { error } = useSelector((state: any) => state.image)

  if(isLoading) {
    return <Loader/>
  }

  if(error) {
    return <Alert/>
  }

  return (
    <>
      <Form/> {image &&
        <div className="mb-4 w-100">
          <img src={image} alt="keanu" className="object-cover mx-auto rounded-md"/>
        </div>
      }
    </>
  )
}