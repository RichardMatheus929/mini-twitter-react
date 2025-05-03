import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CustomSwal = withReactContent(Swal)

export const alertLikeError = () => {
    CustomSwal.fire({
        title: "Talvez você já tenha curtido isso",
        text: "Verifique se você já não curtiu o post ou se ele ainda existe",
        icon: "question"
    });
}

export const alertLikePost = () => {
    Swal.fire({
        title: "Post curtido com sucesso!",
        text: "Você curtiu o post com sucesso.",
        icon: "success",
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonText: "Ok",
        toast: true,
        position: "top-end",
        timer: 2000,
        timerProgressBar: true,
    });
}