interface Props {}

function ColumnHeaders(props: Props) {
    const {} = props;

    return (
        <div className="container mx-auto mt-4 px-3">
            <div className="my-2 hidden items-center justify-between rounded-md border-b-2 bg-white px-2 py-4 shadow-sm md:flex">
                <div className="hidden w-full items-center justify-around font-bold md:flex">
                    <div className="mx-2 w-1/6 text-left">Name</div>
                    <div className="mx-2 w-1/6 text-left">Phone</div>
                    <div className="mx-2 w-2/6 text-left">Email</div>
                    <div className="mx-2 hidden w-1/12 text-left lg:block">Country</div>
                    <div className="w-1/5 text-center">Actions</div>
                </div>
            </div>
        </div>
    );
}

export default ColumnHeaders;
