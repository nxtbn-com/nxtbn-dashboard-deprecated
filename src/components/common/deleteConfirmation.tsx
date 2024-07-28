import Swal from 'sweetalert2';

const useDeleteConfirmation = () => {
    const handleDelete = (id: number, itemType: string, deleteApiMethod: (id: number) => Promise<any>, refreshCallback: () => void) => {
        Swal.fire({
            title: `Are you sure you want to delete this ${itemType}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteApiMethod(id).then(() => {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${itemType} has been deleted.`,
                        icon: "success"
                    });
                    refreshCallback();
                }).catch((error) => {
                    Swal.fire({
                        title: "Error!",
                        text: `Failed to delete ${itemType}.`,
                        icon: "error"
                    });
                });
            }
        });
    };

    return { handleDelete };
};

export default useDeleteConfirmation;
