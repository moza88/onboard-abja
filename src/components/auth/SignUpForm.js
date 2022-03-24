import React from 'react'
import Firebase from 'firebase'
import { useFormik } from 'formik'

const SignUpForm = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            username: '',
            email: '',
        },
        onSubmit: values => {
            let ref1 = Firebase.database().ref().child('users').push()
            ref1.set(values)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />

            <label htmlFor="username">Username</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
            />

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default SignUpForm