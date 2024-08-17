import Swal from 'sweetalert2';

const useDeleteConfirmation = () => {
    const handleDelete = async (id: number, itemType: string, deleteApiMethod: (id: number) => Promise<any>, refreshCallback: () => void): Promise<boolean> => {
        const result = await Swal.fire({
            title: `Are you sure you want to delete this ${itemType}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                await deleteApiMethod(id);
                Swal.fire({
                    title: "Deleted!",
                    text: `${itemType} has been deleted.`,
                    icon: "success"
                });
                refreshCallback();
                return true;
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: `Failed to delete ${itemType}.`,
                    icon: "error"
                });
                return false;
            }
        }

        return false; // If deletion is not confirmed
    };

    return { handleDelete };
};

export default useDeleteConfirmation;
