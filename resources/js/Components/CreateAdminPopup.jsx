import { router } from "@inertiajs/react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import { AdminProvider } from "../Contexts/adminContext";
import { Box } from "@mui/system";
const types = ["super", "regional", "institution"];

export const sm_form = "py-5 px-10";
export const input_sm = "p-0";

export default function CreateAdminPopup({
    offices: regionalOffices,
    regional_admins,
    setAdminOpen,
}) {
    const [step, setStep] = useState(1);
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleNext = () => {
        if (selectedRegion) {
            setStep(2);
        }
    };
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            {/* region */}
            <Box sx={{ width: 500 }} className="signup-slider">
                <div
                    className={`signup-track ${
                        step === 2 ? "signup-track-next" : ""
                    }`}
                >
                    <section className="signup-step">
                        {" "}
                        <TextField
                            className={input_sm}
                            required
                            name="cin"
                            label="CIN"
                            sx={{
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgb(99, 99, 135)", // Change label color on focus
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        borderColor:
                                            "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                    },
                                "& .MuiInputLabel-root": {
                                    color: "rgb(99, 99, 135)", // Initial label color
                                },
                                // Add a transition for smooth focusing
                                "& .MuiOutlinedInput-root": {
                                    transition: "border-color 0.3s ease",
                                },
                            }}
                        />
                        <TextField
                            className={input_sm}
                            required
                            name="first_name"
                            label="First name"
                            sx={{
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgb(99, 99, 135)", // Change label color on focus
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        borderColor:
                                            "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                    },
                                "& .MuiInputLabel-root": {
                                    color: "rgb(99, 99, 135)", // Initial label color
                                },
                                // Add a transition for smooth focusing
                                "& .MuiOutlinedInput-root": {
                                    transition: "border-color 0.3s ease",
                                },
                            }}
                        />
                        <TextField
                            className={input_sm}
                            required
                            name="last_name"
                            label="Last name"
                            sx={{
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgb(99, 99, 135)", // Change label color on focus
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        borderColor:
                                            "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                        padding: "0px", // Forcefully change border color on focus
                                    },
                                "& .MuiInputLabel-root": {
                                    color: "rgb(99, 99, 135)", // Initial label color
                                },
                                // Add a transition for smooth focusing
                                "& .MuiOutlinedInput-root": {
                                    transition: "border-color 0.3s ease",
                                },
                                padding: "0px",
                            }}
                        />
                    </section>
                    <section className="signup-step">
                        {" "}
                        <DatePicker
                            label="Basic date picker"
                            className={input_sm}
                            required
                            sx={{
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgb(99, 99, 135)", // Change label color on focus
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        borderColor:
                                            "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                        padding: "0px", // Forcefully change border color on focus
                                    },
                                "& .MuiInputLabel-root": {
                                    color: "rgb(99, 99, 135)", // Initial label color
                                },
                                // Add a transition for smooth focusing
                                "& .MuiOutlinedInput-root": {
                                    transition: "border-color 0.3s ease",
                                },
                                padding: "0px",
                            }}
                        />
                    </section>
                    <section className="signup-step">
                        {" "}
                        <TextField
                            className={input_sm}
                            required
                            name="email"
                            label="Email"
                            type="email"
                            sx={{
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgb(99, 99, 135)", // Change label color on focus
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        borderColor:
                                            "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                    },
                                "& .MuiInputLabel-root": {
                                    color: "rgb(99, 99, 135)", // Initial label color
                                },
                                // Add a transition for smooth focusing
                                "& .MuiOutlinedInput-root": {
                                    transition: "border-color 0.3s ease",
                                },
                            }}
                        />
                        <TextField
                            className={input_sm}
                            required
                            name="password"
                            label="Password"
                            type="password"
                            sx={{
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "rgb(99, 99, 135)", // Change label color on focus
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                },
                                "& .Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                        borderColor:
                                            "rgb(99, 99, 135) !important", // Forcefully change border color on focus
                                        padding: "0px", // Forcefully change border color on focus
                                    },
                                "& .MuiInputLabel-root": {
                                    color: "rgb(99, 99, 135)", // Initial label color
                                },
                                // Add a transition for smooth focusing
                                "& .MuiOutlinedInput-root": {
                                    transition: "border-color 0.3s ease",
                                },
                                padding: "0px",
                            }}
                        />
                    </section>
                </div>
            </Box>
            <Box>
                {/* verify submit button */}
                <Button
                    onClick={handleNext}
                    variant="contained"
                    type="button"
                    sx={{
                        backgroundColor: "rgb(99, 99, 135)",
                        padding: "8px 30px",
                        textTransform: "none", // This stops the all-caps behavior
                        float: "right",
                    }}
                >
                    {step === 1 ? "Next" : "Add"}
                </Button>
            </Box>
        </form>
    );
}
