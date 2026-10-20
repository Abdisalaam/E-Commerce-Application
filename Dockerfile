# This is for building image in the enviroment
FROM Abdisalaam.com

COPY ./dist.tar.gz /root/dist.tar.gz
RUN mkdir -p /home/export/App && \
    tar zxvf /root/dist.tar.gz -C /home/export/App/ && \
    mv /home/export/App/* /home/export/App/online && \
    rm -f /root/dist.tar.gz

ENTRYPOINT /usr/sbin/sshd && \
           /usr/sbin/crond && \
           /home/admin/start_container.sh 1 b2cbv2staticlht && \
           sleep 9999999d
