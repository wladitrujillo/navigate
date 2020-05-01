
export const onError = (error) => {
    console.error(error);
    Alert.alert("Error", error.message + " - " + error.code);
}