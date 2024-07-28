import React, { ReactNode } from 'react';

type NXFormProps = {
    title?: string;
    onSubmit: (e: React.FormEvent) => void;
    className?: string;
    children: ReactNode;
};

const NXForm: React.FC<NXFormProps> = ({ title, onSubmit, className, children }) => {
    return (
        <form className={className} onSubmit={onSubmit}>
            {title && <h2 className="text-lg font-medium text-gray-900">
                {title}
            </h2> }
            {children}
        </form>
    );
};

export default NXForm;