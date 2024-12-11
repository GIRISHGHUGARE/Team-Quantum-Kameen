const Input = ({ icon: Icon, ...props }) => {
    return (
        <div className='relative mb-6'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <Icon className='size-5 text-creme' />
            </div>
            <input
                {...props}
                className='w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-brown focus:ring-2 focus:ring-grey text-white placeholder-creme transition duration-200'
            />
        </div>
    );
};
export default Input;