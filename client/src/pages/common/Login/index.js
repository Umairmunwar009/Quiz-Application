import React from "react";
import { Form, message } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../apicalls/users";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import ParticlesBackground from "../../../components/ParticlesBackground";

function Login() {
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await loginUser(values);
            dispatch(HideLoading());
            if (response.success) {
                message.success(response.message);
                localStorage.setItem("token", response.data);
                window.location.href = "/";
            } else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <ParticlesBackground>
            <div
                className="flex justify-center items-center h-screen"
                style={{ position: "relative", zIndex: 1 }}
            >
                <div
                    className="card w-400 p-3 bg-white"
                    style={{ borderRadius: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}
                >
                    <div className="flex flex-col">
                        <h1 className="text-2xl mb-2">
                            EXAM PORTAL - LOGIN <i className="ri-login-circle-line"></i>
                        </h1>
                        <div className="divider"></div>
                        <Form layout="vertical" className="mt-2" onFinish={onFinish}>
                            <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email!" }]}>
                                <input type="text" className="ant-input" />
                            </Form.Item>
                            <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password!" }]}>
                                <input type="password" className="ant-input" />
                            </Form.Item>
                            <div className="flex flex-col gap-2">
                                <button type="submit" className="primary-contained-btn mt-2 w-100">
                                    Login
                                </button>
                                <Link to="/register" className="underline">
                                    Not a member? Register
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </ParticlesBackground>
    );
}

export default Login;
