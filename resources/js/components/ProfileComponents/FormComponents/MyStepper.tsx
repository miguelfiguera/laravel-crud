function MyStepper({ activeStep }: { activeStep: number }) {
    const activeClass = {
        forLi: 'flex items-center space-x-2.5 text-blue-600 rtl:space-x-reverse',
        forSpan: 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-600',
    };
    const completedClass = {
        forLi: 'flex items-center space-x-2.5 text-green-600 rtl:space-x-reverse',
        forSpan: 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-green-600 bg-green-600 text-white',
    };
    const inactiveClass = {
        forLi: 'flex items-center space-x-2.5 text-gray-500 rtl:space-x-reverse',
        forSpan: 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-500',
    };
    return (
        <div className="container mx-auto flex items-center justify-center">
            <ol className="w-full items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-8 rtl:space-x-reverse">
                <li className={activeStep === 0 ? activeClass.forLi : completedClass.forLi}>
                    <span className={activeStep === 0 ? activeClass.forSpan : completedClass.forSpan}>1</span>
                    <span>
                        <h3 className="leading-tight font-medium">Contact</h3>
                    </span>
                </li>
                <li className={activeStep === 1 ? activeClass.forLi : activeStep === 2 ? completedClass.forLi : inactiveClass.forLi}>
                    <span className={activeStep === 1 ? activeClass.forSpan : activeStep === 2 ? completedClass.forSpan : inactiveClass.forSpan}>
                        2
                    </span>
                    <span>
                        <h3 className="leading-tight font-medium">Address</h3>
                    </span>
                </li>
            </ol>
        </div>
    );
}

export default MyStepper;
