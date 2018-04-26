import toastr from 'toastr';

export const handleRemoteRequestFault = (error) => {
    toastr.error(`${error.status} : ${error.statusText}`);
};

export const handleRemoteRequestSuccess = (success) => {
    toastr.success(success);
};
