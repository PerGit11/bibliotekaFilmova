export const Button = ({children}) => {
    return (
        <button className={"w-64 py-2.5 px-5 text-gray-700 dark:text-slate-50 text-xl bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 font-medium rounded-lg"}>{children}</button>
    )
}