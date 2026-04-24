  "use client"
import { db } from "@/config/firebase.config";
import { Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import * as yup from "yup";


const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    genre: yup.string().required("Genre is required"),
    posterUrl: yup.string().required("Url is required").url("Invalid url").nullable(),
    year: yup.number().required("year is required").min(1900, "Invalid year").max(2030),
    notes: yup.string().required("Notes is required").max(100),
});

const genres  = ["Action","Drama","Comedy","Horror","Sci-fi","Documentary","Animationmovie"];

export default function AddMovie() {
    const {data: session} = useSession();
    const {handleSubmit, handleChange, values, errors,touched} = useFormik({
        initialValues: {
           title: "",
           genre: "",
           posterUrl: "",
           year: "",
           notes: ""
        },
        onSubmit:async (values,{resetForm})=>{
            try {
               await addDoc(collection(db, "movies"),{
                 user: session?.user?.id,
                 title: values.title,
                 genres: values.genre,
                 posterUrl: values.posterUrl,
                 releaseYear: values.year,
                 notes: values.notes,
                 timeCreated: new Date(),
               })
               alert("Form submitted successfully");
               resetForm()
            }
            catch(error){
               console.error("unable to submit form:",error)
            }       
        },
        validationSchema:schema,
    })
    return (
        <main className="min-h-screen flex justify-center py-20 px-4">
            <Card sx={{width: 400}} >
                <CardHeader 
                 sx={{textAlign: "center"}}
                 title="Add Movie"
                 subheader="Fill in Movie Details"
                />
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div>
                            <TextField
                             fullWidth
                             label="Title"
                             type="text"
                             size="small"
                             id="title"
                             onChange={handleChange}
                             value={values.title}
                             placeholder="Enter movie title ....."
                            />
                            {touched.title && errors.title ? <span className="text-xs text-red-500">{errors.title} </span> : null }
                        </div>
                        <div>
                            <FormControl fullWidth size="small">
                                <InputLabel id="genre-label">Genre</InputLabel>
                                <Select
                                 label="Genre"
                                 id="genre"
                                 labelId="genre-label"
                                 name="genre"
                                 value={values.genre}
                                 onChange={handleChange}
                                >
                                    {genres.map(genre =>
                                    <MenuItem  key={genre} value={genre}>
                                       {genre}
                                    </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            {touched.genre && errors.genre ? <span className="text-xs text-red-500">{errors.genre} </span> : null }
                        </div>
                        <div>
                           <TextField
                             fullWidth
                             label="Poster URL"
                             size="small"
                             id="posterUrl"
                             type="url"
                             value={values.posterUrl}
                             onChange={handleChange}
                           />
                           {touched.posterUrl && errors.posterUrl? <span className="text-xs text-red-500">{errors.posterUrl} </span> : null }
                        </div>
                        <div>
                            <TextField
                            fullWidth
                            label="Release Year"
                            size="small"
                            id="year"
                            type="number"
                            value={values.year}
                            onChange={handleChange}
                            />
                            {touched.year && errors.year ? <span className="text-xs text-red-500">{errors.year} </span> : null }
                        </div>
                        <div>
                            <TextField
                             fullWidth
                             label="Notes"
                             type="text"
                             multiline
                             rows={2}
                             id="notes"
                             value={values.notes}
                             onChange={handleChange}
                            />
                            {touched.notes && errors.notes ? <span className="text-xs text-red-500">{errors.notes} </span> : null }
                        </div>
                        <button type="submit" className="w-full h-10 rounded-md shadow-md text-white cursor-pointer bg-red-500 hover:opacity-75">Add Movie</button>
                    </form>
                </CardContent>
            </Card>


         
        </main>
    )
}