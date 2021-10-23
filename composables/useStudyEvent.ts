const fetchEvents = async (onError: () => {}) => {
  const { data } = await useFetch('/api/study')

  if (!data.value) {
    return onError()
  }
  return data
}

export const useStudyEvent = () => {
  return {
    fetchEvents,
  }
}
