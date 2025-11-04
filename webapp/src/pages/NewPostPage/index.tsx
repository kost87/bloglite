import { zCreatePostTrpcInput } from "@bloglite/backend/src/router/createPost/input"
import { useFormik } from "formik"
import { withZodSchema } from "formik-validator-zod"
import { Input } from "../../components/input"
import { Segment } from "../../components/Segment"
import { Textarea } from "../../components/Textarea"
import { trpc } from "../../lib/trpc"

export const NewPostPage = () => {
  const createPost = trpc.createPost.useMutation();
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      text: ''
    },
    validate: withZodSchema(zCreatePostTrpcInput),
    onSubmit: async (values) => {
      await createPost.mutateAsync(values)
    }
  })

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