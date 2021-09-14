# syntax=docker/dockerfile:1
FROM mcr.microsoft.com/dotnet/sdk:3.1 as build-env
WORKDIR /app

COPY *.csproj .
RUN dotnet restore

# copy and publish app and libraries
COPY * ./
RUN dotnet publish -c Release -o out

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:3.1
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:9090
COPY --from=build-env /app/out .
EXPOSE 9090/tcp
ENTRYPOINT ["dotnet", "CustomerApp.dll"]