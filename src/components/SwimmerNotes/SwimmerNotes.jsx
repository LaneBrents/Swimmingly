// import React, { useState } from "react";
// import { Button, Form, Segment } from "semantic-ui-react";
// import { useNavigate } from "react-router-dom";

// export default function noteForm(props) {

//     const navigate = useNavigate();

//     const [state, setState] = useState({
//         note: "",
//     });


//     function handleChange(e) {
//         setState({
//             ...state,
//             [e.target.name]: e.target.value,
//         });
//     }

//     async function handleSubmit(e) {

//         e.preventDefault();

//         try {
//             await props.handleAddSwimmer(state);
//             navigate("/SwimmerInfo");
//         } catch (err) {
//             console.log(err, "<- in AddSwimmer")
//         }
//     }

//     return (
//         <Segment>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Input
//                     className="form-control"
//                     name="note"
//                     value={state.note}
//                     placeholder="Add A Note"
//                     onChange={handleChange}
//                     required
//                 />
//                 <Button type="submit" className="btn">
//                     Add A Note
//                 </Button>
//             </Form>
//         </Segment>
//     );
// }