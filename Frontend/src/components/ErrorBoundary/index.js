import React, { Component } from 'react';
import Button from '../Button';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    goBack = () => {
        window.history.back();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className='flex flex-col gap-10 justify-center items-center h-screen bg-bgColor1'>
                    <p className='font-bold text-2xl text-text1'>
                        Something went wrong
                    </p>
                    <span className='flex gap-5 my-5'>
                        <Button disabled>Go Back</Button>
                        <Button><a href="/">Home</a></Button>
                        <Button disabled>Report</Button>
                    </span>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
