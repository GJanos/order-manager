//tsx file in styles folder... yes, its is for the react-select element
//that component accepts an object as a parameter where you can set the style as a properties
export const selectStyle = {
    option: (provided: any, state: any) => ({
      ...provided,
      fontSize: '12px',
      borderBottom: '2px solid #e7e0e0',
    }),
    control: () => ({
        display: 'flex',
        backgroundColor: "white",
        width: '100%',
        padding: '2px',
        border: '2px solid',
        borderRadius: 10,
        fontSize: '0.8rem',
        color: '#e7e0e0'
    })
}