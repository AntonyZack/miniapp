const accordionItems = [
    {
        title: 'Click to open this one and close others',
        content: (
            <div>
                <div className="my-2 flex justify-between">
                    <div className="w-1/2">Row 1 Col 1</div>
                    <div className="w-1/2">Row 1 Col 2</div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="w-1/2">Row 2 Col 1</div>
                    <div className="w-1/2">Row 2 Col 2</div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="w-1/2">Row 3 Col 1</div>
                    <div className="w-1/2">Row 3 Col 2</div>
                </div>
                <div className="my-2 flex justify-between">
                    <div className="w-1/2">Last Row Col 1</div>
                    <div className="w-1/2">Last Row Col 2</div>
                </div>
            </div>
        )
    }
];

export { accordionItems };
