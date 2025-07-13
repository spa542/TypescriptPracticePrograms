type logProperties = Partial<{
    withDate: boolean;
    withId: boolean;
    note: string;
}>;
declare function debug(message: string, logProps?: logProperties): void;
declare function info(message: string, logProps?: logProperties): void;
declare function error(message: string, logProps?: logProperties): void;
export { debug, info, error };
