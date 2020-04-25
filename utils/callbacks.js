
export const onError = (error) => {
    Alert.alert("Error", error.message + " - " + error.code);
}