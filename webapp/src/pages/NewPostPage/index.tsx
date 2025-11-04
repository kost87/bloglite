import { useFormik } from "formik"
import { Input } from "../../components/input"
import { Segment } from "../../components/Segment"
import { Textarea } from "../../components/Textarea"
import { withZodSchema } from "formik-validator-zod"
import { z } from "zod"

export const NewPostPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      text: ''
    },
    validate: withZodSchema(
      z.object({
        name: z.string().min(1),
        description: z.string().min(1),
        text: z.string().min(100, 'Text shoud be at least 100 characters long'),
      })
    ),
    onSubmit: (values) => {
      console.info('Submitted', values)
    }
  })

  console.log(formik);
  

  return (
    <Segment title="New Post">
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit() 
        }}
      >
        <Input name="name" lable="Name" formik={formik} />
        <Input name="description" lable="Description" formik={formik} />
        <Textarea name="text" lable="Text" formik={formik} />

        <button type="submit">Create Post</button>
      </form>
    </Segment>
  )
}