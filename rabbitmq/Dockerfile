FROM rabbitmq:3.13.1-management-alpine

WORKDIR /rabbitmq

COPY ./ ./

COPY setup.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/setup.sh

ENTRYPOINT ["setup.sh"]

EXPOSE 5672 15672

