export function asyncBootstrapTaskFactory(): () => Promise<any> {
  return () => new Promise((resolve, reject) => {});
}
